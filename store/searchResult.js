export const state = () => ({
  article: [
    {
      id: "1",
      link: "http://www.cetc.com.cn/...",
      title: "测试文章1",
      type: "人才队伍",
      author: "北京某实验室",
      date: "2018-01-01 00:00:00",
      skim: 2000,
      description: "北京某实验室研发出了北京某实验室研发出了...北京某实验室研发出了北京某实验室研发出了...北京某实验室研发出了北京某实验室研发出了...北京某实验室研发出了北京某实验室研发出了...北京某实验室研发出了北京某实验室研发出了...北京某实验室研发出了北京某实验室研发出了..."
    },
    {
      id: "2",
      link: "http://www.cetc.com.cn/...",
      title: "测试文章2",
      type: "科研任务",
      author: "北京某实验室",
      date: "2018-01-01 00:00:00",
      skim: 2000,
      description: "北京某实验室研发出了北京某实验室研发出了...北京某实验室研发出了北京某实验室研发出了...北京某实验室研发出了北京某实验室研发出了...北京某实验室研发出了北京某实验室研发出了...北京某实验室研发出了北京某实验室研发出了...北京某实验室研发出了北京某实验室研发出了...北京某实验室研发出了北京某实验室研发出了..."
    },
    {
      id: "3",
      link: "http://www.cetc.com.cn/...",
      title: "测试文章3",
      type: "科研成果",
      author: "北京某实验室",
      date: "2018-01-01 00:00:00",
      skim: 2000,
      description: "北京某实验室研发出了北京某实验室研发出了...北京某实验室研发出了北京某实验室研发出了...北京某实验室研发出了北京某实验室研发出了...北京某实验室研发出了北京某实验室研发出了...北京某实验室研发出了北京某实验室研发出了...北京某实验室研发出了北京某实验室研发出了...北京某实验室研发出了北京某实验室研发出了..."
    },
    {
      id: "4",
      link: "http://www.cetc.com.cn/...",
      title: "测试文章4",
      type: "设备设施",
      author: "北京某实验室",
      date: "2018-01-01 00:00:00",
      skim: 2000,
      description: "北京某实验室研发出了北京某实验室研发出了..."
    },
    {
      id: "5",
      link: "http://www.cetc.com.cn/...",
      title: "测试文章5",
      type: "人才队伍",
      author: "北京某实验室",
      date: "2018-01-01 00:00:00",
      description: "北京某实验室研发出了北京某实验室研发出了...北京某实验室研发出了北京某实验室研发出了...北京某实验室研发出了北京某实验室研发出了...北京某实验室研发出了北京某实验室研发出了...北京某实验室研发出了北京某实验室研发出了...北京某实验室研发出了北京某实验室研发出了...北京某实验室研发出了北京某实验室研发出了..."
    },
    {
      id: "6",
      link: "http://www.cetc.com.cn/...",
      title: "测试文章6",
      type: "人才队伍",
      author: "北京某实验室",
      date: "2018-01-01 00:00:00",
      skim: 2000,
      description: "北京某实验室研发出了北京某实验室研发出了...北京某实验室研发出了北京某实验室研发出了...北京某实验室研发出了北京某实验室研发出了...北京某实验室研发出了北京某实验室研发出了...北京某实验室研发出了北京某实验室研发出了...北京某实验室研发出了北京某实验室研发出了...北京某实验室研发出了北京某实验室研发出了..."
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