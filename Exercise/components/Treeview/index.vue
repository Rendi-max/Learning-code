<template>
  <UContainer class="mt-4">
    <div class="my-4">
      <UInput
        placeholder="Cari tree"
        size="xl"
        trailing-icon="mdi-search"
        :ui="{
          icon: {
            trailing: {
              pointer: '',
            },
          },
        }"
      >
        <template #trailing>
          <UButton
            variant="link"
            icon="mdi-magnify"
            @click="
              () => {
                console.log('cihuy');
              }
            "
          />
        </template>
      </UInput>
    </div>
    <div
      class="flex items-center p-3 w-fit intr0-x"
      v-for="(item, index) in mainTree"
      :key="index"
      :class="item.level === 3 ? 'ml-4' : item.level === 4 ? 'ml-12' : ''"
    >
      <UIcon
        v-if="item.level < 4"
        :name="item.active ? 'mdi-chevron-down' : 'mdi-chevron-right'"
        class="size-8"
        @click="openTree(item.id, index, item.level, item.active)"
      />
      <div class="font-semibold text-lg">{{ item.nama }}</div>
    </div>
  </UContainer>
</template>
<script lang="ts" setup>
const province =[
  { "id": "0101", "nama": "Andalas", "level": 2, "active": false, "hasChild": true },
  { "id": "0102", "nama": "Madura Raya", "level": 2, "active": false, "hasChild": true },
  { "id": "0103", "nama": "Borneo Utara", "level": 2, "active": false, "hasChild": true },
  { "id": "0104", "nama": "Sulawesi Timur", "level": 2, "active": false, "hasChild": true },
  { "id": "0105", "nama": "Papua Barat Daya", "level": 2, "active": false, "hasChild": true }
]


const regency = [
  {
    id: "010101",
    parent_id: "0101",
    nama: "Sungai Emas",
    level: 3,
    active: false,
  },
  {
    id: "010102",
    parent_id: "0101",
    nama: "Gunung Jaya",
    level: 3,
    active: false,
  },
  {
    id: "010103",
    parent_id: "0101",
    nama: "Pesisir Selatan",
    level: 3,
    active: false,
  },
  {
    id: "010104",
    parent_id: "0101",
    nama: "Lembah Andalas",
    level: 3,
    active: false,
  },
  {
    id: "010105",
    parent_id: "0101",
    nama: "Hutan Permai",
    level: 3,
    active: false,
  },

  {
    id: "010201",
    parent_id: "0102",
    nama: "Sampang Timur",
    level: 3,
    active: false,
  },
  {
    id: "010202",
    parent_id: "0102",
    nama: "Bangkalan Barat",
    level: 3,
    active: false,
  },
  {
    id: "010203",
    parent_id: "0102",
    nama: "Sumenep Laut",
    level: 3,
    active: false,
  },
  {
    id: "010204",
    parent_id: "0102",
    nama: "Madura Tengah",
    level: 3,
    active: false,
  },
  {
    id: "010205",
    parent_id: "0102",
    nama: "Karapan Indah",
    level: 3,
    active: false,
  },

  {
    id: "010301",
    parent_id: "0103",
    nama: "Tarakan Sejahtera",
    level: 3,
    active: false,
  },
  {
    id: "010302",
    parent_id: "0103",
    nama: "Nunukan Makmur",
    level: 3,
    active: false,
  },
  {
    id: "010303",
    parent_id: "0103",
    nama: "Kutai Barat",
    level: 3,
    active: false,
  },
  {
    id: "010304",
    parent_id: "0103",
    nama: "Berau Tengah",
    level: 3,
    active: false,
  },
  {
    id: "010305",
    parent_id: "0103",
    nama: "Mahakam Hulu",
    level: 3,
    active: false,
  },

  {
    id: "010401",
    parent_id: "0104",
    nama: "Manado Utara",
    level: 3,
    active: false,
  },
  {
    id: "010402",
    parent_id: "0104",
    nama: "Gorontalo Selatan",
    level: 3,
    active: false,
  },
  {
    id: "010403",
    parent_id: "0104",
    nama: "Palu Raya",
    level: 3,
    active: false,
  },
  {
    id: "010404",
    parent_id: "0104",
    nama: "Morowali Jaya",
    level: 3,
    active: false,
  },
  {
    id: "010405",
    parent_id: "0104",
    nama: "Luwuk Indah",
    level: 3,
    active: false,
  },

  {
    id: "010501",
    parent_id: "0105",
    nama: "Sorong Kota",
    level: 3,
    active: false,
  },
  {
    id: "010502",
    parent_id: "0105",
    nama: "Raja Ampat",
    level: 3,
    active: false,
  },
  {
    id: "010503",
    parent_id: "0105",
    nama: "Fakfak Selatan",
    level: 3,
    active: false,
  },
  {
    id: "010504",
    parent_id: "0105",
    nama: "Manokwari Timur",
    level: 3,
    active: false,
  },
  {
    id: "010505",
    parent_id: "0105",
    nama: "Kaimana Barat",
    level: 3,
    active: false,
  },
];

const subsdistrict = [
  {
    id: "01010101",
    parent_id: "010101",
    nama: "Rantau Indah",
    level: 4,
    active: false,
  },
  {
    id: "01010102",
    parent_id: "010101",
    nama: "Tanjung Sari",
    level: 4,
    active: false,
  },
  {
    id: "01010103",
    parent_id: "010101",
    nama: "Pasar Baru",
    level: 4,
    active: false,
  },
  {
    id: "01010104",
    parent_id: "010101",
    nama: "Sungai Hulu",
    level: 4,
    active: false,
  },
  {
    id: "01010105",
    parent_id: "010101",
    nama: "Bukit Hijau",
    level: 4,
    active: false,
  },
];

const mainTree = ref(province);
const openTree = (id: any, index: any, level: any, active: any) => {
  let mainIndex = mainTree.value.findIndex((item) => item.id === id);
  if (active) {
    let bunchFiltered = mainTree.value.filter((item) => item.parent_id === id);
    mainTree.value.splice(mainIndex + 1, bunchFiltered.length);
    mainTree.value[mainIndex].active = false;
  } else {
    let bunchChild =
      level === 2
        ? regency.filter((item) => item.parent_id === id)
        : subsdistrict.filter((item) => item.parent_id === id);
    console.log(bunchChild);

    bunchChild.forEach((element) => {
      mainTree.value.splice(mainIndex + 1, 0, element);
    });
    mainTree.value[mainIndex].active = true;
    console.log(mainTree.value);
  }
};
</script>
