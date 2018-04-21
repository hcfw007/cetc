export const state = () => ({
  mapData: [],
  onSearch: false,
  info: {
    北京: {
      talentList: [
        {
          avatar: "https://avatars0.githubusercontent.com/u/1282324?s=88&v=4",
          name: "某人才",
          field: "机器学习",
          lab: "北京某实验室1"
        },
        {
          avatar: "https://avatars0.githubusercontent.com/u/1282324?s=88&v=4",
          name: "某人才",
          field: "机器学习",
          lab: "北京某实验室2"
        },
        {
          avatar: "https://avatars0.githubusercontent.com/u/1282324?s=88&v=4",
          name: "某人才",
          field: "机器学习",
          lab: "北京某实验室3"
        }
      ]
    },
    湖南: {
      talentList: [
        {
          avatar: "https://avatars0.githubusercontent.com/u/1282324?s=88&v=4",
          name: "某人才",
          field: "机器学习",
          lab: "湖南某实验室"
        }
      ]
    },
    西藏: {
      talentList: [
        {
          avatar: "https://avatars0.githubusercontent.com/u/1282324?s=88&v=4",
          name: "某人才",
          field: "机器学习",
          lab: "西藏某实验室"
        }
      ]
    }
  },
  provinceList: [
    { name: "西藏", value: 1 },
    { name: "北京", value: 2 },
    { name: "湖南", value: 1 }
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
