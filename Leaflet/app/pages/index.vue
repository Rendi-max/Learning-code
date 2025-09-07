<script setup lang="ts">
import { LMap, LTileLayer, LGeoJson, LMarker, LControlScale, LControlZoom, LTooltip, LIcon, LPolyline, LCircle } from '@vue-leaflet/vue-leaflet';

const inputColor = ref('')
const color = ref('#ff0000')
const geojson = ref()
const layer = ref(true)
const latLang = ref()
const option = ref(false)
const polyline = ref()
const marker = ref<{Lat: number, Lng:number}[]>([])
const circles = ref<{Lat: number, Lng:number, radius:number, color:string}[]>([])
const line = ref<any[]>([])
const index = ref()
const currentCircle = ref()
const tileLayer = ref([{
    layer: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
}])

const changeGeojson = () => {
    color.value = inputColor.value
    console.log(color.value)
}

const optionMap = (value:any) => {
  latLang.value = value.latlng
  option.value = true
  console.log(latLang.value)
} 

const createMarker = () => {
  marker.value.push({
    Lat: latLang.value.lat,
    Lng: latLang.value.lng
  })
  latLang.value = null
  option.value = false
}

const updateMarker = (value:any, i:number) => {
    marker.value[i].Lat = value.lat
    marker.value[i].Lng = value.lng
    // console.log(marker.value)
    latLang.value = null
    option.value = false
}

const createPolyline = () => {
    polyline.value = []
    line.value.push([latLang.value.lat, latLang.value.lng])
    polyline.value = line.value
    latLang.value = null
    option.value = false
}

const createCircle = () => {
    circles.value.push({
      Lat: latLang.value.lat,
      Lng: latLang.value.lng,
      radius: 95000,
      color: 'blue'
    })
    latLang.value = null
    option.value = false
}

const updateCircle = () => {
    circles.value[index.value].Lat = currentCircle.value.Lat
    circles.value[index.value].Lng = currentCircle.value.Lng
    circles.value[index.value].radius = currentCircle.value.radius
    circles.value[index.value].color = currentCircle.value.color
}

const deleteCircle = () => {
    const confrim = window.confirm('Delete circle?')
    if (confrim) {
      circles.value.splice(index.value, 1)
      index.value = null
      currentCircle.value = null
    }
}

const onChange = (event:any) => {
    index.value = event.target.value
    currentCircle.value = circles.value[event.target.value]
}

watch(
  layer, (newVal) =>{
    tileLayer.value = []
    if (newVal === true) {
        tileLayer.value.push({
          layer: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        })
    }else{
      tileLayer.value.push({
          layer: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
      })
      tileLayer.value.push({
          layer: 'https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}'
      })
    }
})

watch(currentCircle, (newVal) => {
    if (newVal) {
      console.log(currentCircle.value)
    }
})

onMounted(async() => {
    layer.value = false
    polyline.value = line.value
    const data = await fetch('/data/indonesia-prov.geojson')
    geojson.value = await data.json()
    console.log(polyline.value)
    // console.log(geojson.value)
})
</script>

<template>
    <LMap
        style="height: 350px"
        :zoom="5"
        :center="[-1.21322, 117.559482]"
        :use-global-leaflet="false"
        :options="{
          zoomControl: false,
          attributionControl: false,
          dragging: false,
        }"
        @click="optionMap"
      >
        <LTileLayer
            v-for="(layer, index) in tileLayer" :key="index"
            :url="layer.layer"
        />
        <LGeoJson
          :geojson="geojson"
          :options-style="{
            color: color
          }"
        />
        <LControlScale position="topright" :imperial="true" :metric="false"/>
        <LControlZoom position="bottomright" />
        <LMarker
        v-for="(mark, index) in marker" :key="index"
        :lat-lng="[mark.Lat, mark.Lng]" 
        draggable
        @update:lat-lng="(value:any) => updateMarker(value, index)"
        >
          <LIcon :icon-url="'Swastika_nazi.svg'" :icon-size="[30,30]" />
          <LTooltip>Lat: {{ mark.Lat }} <br> Lng: {{ mark.Lng }}</LTooltip>
        </LMarker>
        <LPolyline
        :lat-lngs="[
          polyline
        ]"
        :weight="3"
        color="blue"
      />
      <LCircle
      v-for="(circle, index) in circles" :key="index"
      :lat-lng="[circle.Lat, circle.Lng]"
      :radius="circle.radius"
      :color="circle.color"
      >
      <LTooltip>Lat: {{ circle.Lat }} <br> Lng: {{ circle.Lng }} <br> Radius: {{ circle.radius }}</LTooltip>
      </LCircle>
    </LMap>
    <button style="margin-top: 10px;" @click="layer = !layer">Change tile layer</button>
    <div class="" style="margin: 10px 0 10px 0;">
      <input type="color" v-model="inputColor">
      <button @click="changeGeojson">Change Color</button>
    </div>
    <div class="" style="margin: 10px 0 10px 0;" v-if="circles.length">
        <select name="" id="" @change="onChange">
          <option value=""></option>
          <option v-for="(circle, index) in circles" :key="index" :value="index">Circle {{ index + 1 }}</option>
        </select>
    </div>
    <div class=""style="margin: 10px 0 10px 0;" v-if="currentCircle">
        <label for="">Lat </label>
        <input type="text" v-model="currentCircle.Lat">
        <label for=""> Lng </label>
        <input type="text" v-model="currentCircle.Lng">
        <label for=""> Radius </label>
        <input type="text" v-model="currentCircle.radius">
        <label for=""> Color </label>
        <input type="color" v-model="currentCircle.color">
        <!-- <button @click="updateCircle">Update circle</button> -->
        <button @click="deleteCircle">Delete circle</button>
    </div>
    <div class="" style="margin-top: 20px;" v-if="option">
      <p>Option</p>
      <button @click="createMarker">Add Marker</button>
      <button @click="createPolyline">Add Polyline</button>
      <button @click="createCircle">Add Circle</button>
    </div>
</template>