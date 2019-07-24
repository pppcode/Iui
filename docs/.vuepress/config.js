module.exports = {
  base: '/Iui/',
  title: 'Iui',
  description: '这是一个 Vue UI 框架',
  themeConfig: {
    nav: [
      {text: '主页', link: '/'},
      {text: '文档', link: '/guide/'},
      {text: '交流', link: 'https://google.com'},
    ],
    sidebar: [
      {
        title: '入门',
        collapsable: false,
        children: [
          '/install/',
          '/get-started/',
        ]
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          '/components/layout',
          '/components/grid',
          '/components/button',
          '/components/input',
          '/components/tabs',
          '/components/popover',
          '/components/toast',
        ]
      }
    ]
  }
}