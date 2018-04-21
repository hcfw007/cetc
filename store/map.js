export const state = () => ({
  mapData: [],
  onSearch: false,
  provinceList: [
    {
      name: "西藏",
      value: 3
    },
    {
      name: "北京",
      value: 100
    },
    {
      name: "天津",
      value: 100
    },
    {
      name: "黑龙江",
      value: 1
    },
    {
      name: "广西",
      value: 10
    },
    {
      name: "台湾",
      value: 20
    },
    {
      name: "海南",
      value: 15
    },
    {
      name: "新疆",
      value: 7
    },
    {
      name: "内蒙古",
      value: 10
    },
    {
      name: "江西",
      value: 12
    },
    {
      name: "湖南",
      value: 1
    }
  ]
});

export const mutations = {
  init(state) {
    state.mapData = state.provinceList;
  },
  search(state, str) {
    if (!str) {
      state.mapData = state.provinceList;
      state.onSearch = false;
    } else {
      state.mapData = [];
      state.onSearch = true;
      state.provinceList.forEach(item => {
        str === item.name && state.mapData.push(item);
      });
    }
  }
};
