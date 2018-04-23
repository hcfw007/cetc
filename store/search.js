export const state = () => ({
  result: {}
});

export const mutations = {
  submit(state, str) {
    state.result = [
      {
        title: "实验室",
        content: [
          {
            subTitle: "北京某实验室",
            description: "北京某实验室的介绍"
          }
        ]
      },
      {
        title: "人才队伍",
        content: [
          {
            subTitle: "某人才",
            description: "某人才的介绍"
          }
        ]
      },
      {
        title: "科研成果",
        content: [
          {
            subTitle: "测试文章1",
            description: "北京某实验室开发了..."
          }
        ]
      }
    ];
  }
};
