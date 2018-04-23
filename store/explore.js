export const state = () => ({
  article: [
    {
      id: "1",
      title: "测试文章-exp-1",
      type: "人才队伍",
      author: "北京某实验室",
      date: "2018-01-01 00:00:00",
      skim: 2000,
      description: "北京某实验室研发出了北京某实验室研发出了..."
    },
    {
      id: "2",
      title: "测试文章-exp-2",
      type: "人才队伍",
      author: "北京某实验室",
      date: "2018-01-01 00:00:00",
      skim: 2000,
      description: "北京某实验室研发出了北京某实验室研发出了..."
    },
    {
      id: "3",
      title: "测试文章-exp-3",
      type: "设备设施",
      author: "北京某实验室",
      date: "2018-01-01 00:00:00",
      skim: 2000,
      description: "北京某实验室研发出了北京某实验室研发出了..."
    },
    {
      id: "4",
      title: "测试文章-exp-4",
      type: "设备设施",
      author: "北京某实验室",
      date: "2018-01-01 00:00:00",
      skim: 2000,
      description: "北京某实验室研发出了北京某实验室研发出了..."
    },
    {
      id: "5",
      title: "测试文章-exp-5",
      type: "科研成果",
      author: "北京某实验室",
      date: "2018-01-01 00:00:00",
      description: "北京某实验室研发出了北京某实验室研发出了..."
    },
    {
      id: "6",
      title: "测试文章-exp-6",
      type: "科研成果",
      author: "北京某实验室",
      date: "2018-01-01 00:00:00",
      skim: 2000,
      description: "北京某实验室研发出了北京某实验室研发出了..."
    }
  ],
  typedArticle: [],
  type: ""
});

export const mutations = {
  classify(state, type) {
    if (state.type === type) {
      return;
    } else {
      state.typedArticle = state.article.filter(item => item.type === type);
      state.type = type;
    }
  }
};
