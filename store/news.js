export const state = () => ({
  article: [
    {
      id: "1",
      title: "测试文章1",
      type: "科研进展",
      author: "北京某实验室",
      date: "2018-01-01 00:00:00",
      skim: 2000,
      description: "北京某实验室研发出了北京某实验室研发出了..."
    },
    {
      id: "2",
      title: "测试文章2",
      type: "运行管理",
      author: "北京某实验室",
      date: "2018-01-01 00:00:00",
      skim: 2000,
      description: "北京某实验室研发出了北京某实验室研发出了..."
    },
    {
      id: "3",
      title: "测试文章3",
      type: "通知公告",
      author: "北京某实验室",
      date: "2018-01-01 00:00:00",
      skim: 2000,
      description: "北京某实验室研发出了北京某实验室研发出了..."
    },
    {
      id: "4",
      title: "测试文章4",
      type: "行业动态",
      author: "北京某实验室",
      date: "2018-01-01 00:00:00",
      skim: 2000,
      description: "北京某实验室研发出了北京某实验室研发出了..."
    },
    {
      id: "5",
      title: "测试文章5",
      type: "行业动态",
      author: "北京某实验室",
      date: "2018-01-01 00:00:00",
      description: "北京某实验室研发出了北京某实验室研发出了..."
    },
    {
      id: "6",
      title: "测试文章6",
      type: "行业动态",
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
