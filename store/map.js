export const state = () => ({
  mapData: [],
  onSearch: false,
  info: {
    北京: {
      人才: [
        {
          id: "1",
          labName: "北京某实验室1",
          number: 1
        },
        {
          id: "2",
          labName: "北京某实验室2",
          number: 1
        },
        {
          id: "3",
          labName: "北京某实验室3",
          number: 1
        }
      ],
      设备: [
        {
          id: "4",
          labName: "北京某实验室4",
          number: 1
        },
        {
          id: "5",
          labName: "北京某实验室5",
          number: 1
        },
        {
          id: "6",
          labName: "北京某实验室3",
          number: 1
        }
      ],
      科研: [
        {
          id: "7",
          labName: "北京某实验室1",
          number: 1
        },
        {
          id: "8",
          labName: "北京某实验室4",
          number: 1
        },
        {
          id: "9",
          labName: "北京某实验室3",
          number: 1
        }
      ]
    },
    湖南: {
      人才: [
        {
          id: "1",
          labName: "湖南某实验室",
          number: 2
        }
      ]
    },
    台湾: {
      人才: [
        {
          id: "1",
          labName: "台湾某实验室",
          number: 1
        },
        {
          id: "2",
          labName: "台湾某实验室",
          number: 1
        }
      ]
    },
    上海: {
      设备: [
        {
          id: "1",
          labName: "上海某实验室1",
          number: 1
        },
        {
          id: "2",
          labName: "上海某实验室2",
          number: 2
        }
      ],
      科研: [
        {
          id: "1",
          labName: "上海某实验室1",
          number: 2
        },
        {
          id: "2",
          labName: "上海某实验室2",
          number: 1
        }
      ]
    }
  },
  labList: {
    北京: [
      {
        id: "1",
        name: "北京某实验室1"
      },
      {
        id: "2",
        name: "北京某实验室2"
      },
      {
        id: "3",
        name: "北京某实验室3"
      },
      {
        id: "4",
        name: "北京某实验室4"
      },
      {
        id: "5",
        name: "北京某实验室5"
      }
    ],
    湖南: [
      {
        id: "1",
        name: "湖南某实验室"
      }
    ],
    上海: [
      {
        id: "1",
        name: "上海某实验室1"
      },
      {
        id: "2",
        name: "上海某实验室2"
      }
    ],
    台湾: [
      {
        id: "1",
        name: "台湾某实验室1"
      },
      {
        id: "2",
        name: "台湾某实验室2"
      }
    ]
  },
  provinceList: {
    实验室: [
      { name: "北京", value: 5 },
      { name: "湖南", value: 1 },
      { name: "台湾", value: 2 },
      { name: "上海", value: 2 }
    ],
    人才: [
      { name: "北京", value: 3 },
      { name: "湖南", value: 2 },
      { name: "台湾", value: 2 }
    ],
    设备: [{ name: "北京", value: 3 }, { name: "上海", value: 3 }],
    科研: [{ name: "北京", value: 3 }, { name: "上海", value: 3 }]
  },
  rightInfo: {
    item1: [
      {
        title: "北京实验室揭牌",
        value: "1234",
        id: "1",
        arrow: "down"
      },
      {
        title: "北京实验室揭牌",
        value: "1234",
        id: "2",
        arrow: "up"
      },
      {
        title: "北京实验室揭牌",
        value: "1234",
        id: "3",
        arrow: "down"
      },
      {
        title: "北京实验室揭牌",
        value: "1234",
        id: "4",
        arrow: "up"
      }
    ],
    item2: [
      {
        title: "北京实验室揭牌2",
        value: "1234",
        id: "16",
        arrow: "down"
      },
      {
        title: "北京实验室揭牌2",
        value: "1234",
        id: "5",
        arrow: "up"
      },
      {
        title: "北京实验室揭牌2",
        value: "1234",
        id: "6",
        arrow: "down"
      },
      {
        title: "北京实验室揭牌2",
        value: "1234",
        id: "7",
        arrow: "up"
      }
    ],
    item3: [
      {
        title: "北京实验室揭牌3",
        value: "1234",
        id: "8",
        arrow: "down"
      },
      {
        title: "北京实验室揭牌3",
        value: "1234",
        id: "9",
        arrow: "up"
      },
      {
        title: "北京实验室揭牌3",
        value: "1234",
        id: "10",
        arrow: "down"
      },
      {
        title: "北京实验室揭牌3",
        value: "1234",
        id: "11",
        arrow: "up"
      }
    ],
    item4: [
      {
        title: "北京实验室揭牌4",
        value: "1234",
        id: "12",
        arrow: "down"
      },
      {
        title: "北京实验室揭牌4",
        value: "1234",
        id: "13",
        arrow: "up"
      },
      {
        title: "北京实验室揭牌4",
        value: "1234",
        id: "14",
        arrow: "down"
      },
      {
        title: "北京实验室揭牌4",
        value: "1234",
        id: "15",
        arrow: "up"
      }
    ]
  }
});

export const getters = {
  maxMapData(state) {
    let flag = 0;
    state.mapData.forEach(item => {
      if (item.value > flag) {
        flag = item.value;
      }
    });
    return flag;
  },
  minMapData(state, getters) {
    let flag = getters.maxMapData;
    state.mapData.forEach(item => {
      if (item.value < flag && item.value >= 0) {
        flag = item.value;
      }
    });
    return flag;
  }
};

export const mutations = {
  onShow(state, type) {
    state.mapData = state.provinceList[type];
  }
};
