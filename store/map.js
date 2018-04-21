export const state = () => ({
  mapData: [],
  onSearch: false,
  info: {
    北京: {
      talentList: [
        {
          id: "1",
          avatar: "https://avatars0.githubusercontent.com/u/1282324?s=88&v=4",
          name: "某人才",
          description: "某人才的简介",
          field: "机器学习",
          lab: "北京某实验室1"
        },
        {
          id: "2",
          avatar: "https://avatars0.githubusercontent.com/u/1282324?s=88&v=4",
          name: "某人才",
          description: "某人才的简介",
          field: "机器学习",
          lab: "北京某实验室2"
        },
        {
          id: "3",
          avatar: "https://avatars0.githubusercontent.com/u/1282324?s=88&v=4",
          name: "某人才",
          description: "某人才的简介",
          field: "机器学习",
          lab: "北京某实验室3"
        }
      ],
      machineList: [
        {
          id: "1",
          name: "机器PK-1",
          description: "设施简介",
          lab: "北京某实验室1"
        },
        {
          id: "1",
          name: "机器PK-1",
          description: "设施简介",
          lab: "北京某实验室1"
        },
        {
          id: "1",
          name: "机器PK-1",
          description: "设施简介",
          lab: "北京某实验室1"
        },
        {
          id: "1",
          name: "机器PK-1",
          description: "设施简介",
          lab: "北京某实验室1"
        },
        {
          id: "1",
          name: "机器PK-1",
          description: "设施简介",
          lab: "北京某实验室1"
        },
        {
          id: "1",
          name: "机器PK-1",
          description: "设施简介",
          lab: "北京某实验室1"
        },
        {
          id: "1",
          name: "机器PK-1",
          description: "设施简介",
          lab: "北京某实验室1"
        },

        {
          id: "2",
          name: "机器PK-2",
          description: "设施简介",
          lab: "北京某实验室1"
        },
        {
          id: "3",
          name: "机器PK-3",
          description: "设施简介",
          lab: "北京某实验室1"
        },
        {
          id: "4",
          name: "机器PK-4",
          description: "设施简介",
          lab: "北京某实验室1"
        }
      ],
      researchList: [
        {
          id: 1,
          name: "科研项目1",
          lab: "北京某实验室1",
          type: "机器学习"
        },
        {
          id: 2,
          name: "科研项目2",
          lab: "北京某实验室1",
          type: "机器学习"
        },
        {
          id: 3,
          name: "科研项目3",
          lab: "北京某实验室1",
          type: "物联网"
        },
        {
          id: 4,
          name: "科研项目4",
          lab: "北京某实验室1",
          type: "物联网"
        },
        {
          id: 5,
          name: "科研项目5",
          lab: "北京某实验室1",
          type: "机器学习"
        },
        {
          id: 6,
          name: "科研项目1",
          lab: "北京某实验室1",
          type: "机器学习"
        }
      ]
    },
    湖南: {
      talentList: [
        {
          id: "4",
          avatar: "https://avatars0.githubusercontent.com/u/1282324?s=88&v=4",
          name: "某人才",
          description: "某人才的简介",
          field: "机器学习",
          lab: "湖南某实验室"
        }
      ]
    },
    西藏: {
      talentList: [
        {
          id: "5",
          avatar: "https://avatars0.githubusercontent.com/u/1282324?s=88&v=4",
          name: "某人才",
          description: "某人才的简介",
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
