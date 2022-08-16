<template>
  <div :class="{'show':show}" class="header-search">
    <svg-icon class-name="search-icon" icon-class="search" @click.stop="click" />
    <el-select
      ref="headerSearchSelect"
      v-model="search"
      :remote-method="querySearch"
      filterable
      default-first-option
      remote
      placeholder="Search"
      class="header-search-select"
      @change="change"
    >
      <el-option v-for="item in options" :key="item.path" :value="item" :label="item.title.join(' > ')" />
    </el-select>
  </div>
</template>

<script>
// fuse is a lightweight fuzzy-search module
// make search results more in line with expectations
import Fuse from 'fuse.js'
import path from 'path'

export default {
  name: 'HeaderSearch',
  data() {
    return {
      search: '',
      options: [],
      searchPool: [],
      show: false,
      fuse: undefined,
      routes:''
    }
  },
   
  computed: {
   
  },
  watch: {
    routes() {
      this.searchPool = this.generateRoutes(this.routes)
    },
    searchPool(list) {
      this.initFuse(list)
    },
    show(value) {
      if (value) {
        document.body.addEventListener('click', this.close)
      } else {
        document.body.removeEventListener('click', this.close)
      }
    }
  },
  mounted() {
    this.routes = [  
      {
        path: "/login",
        hidden: true,
      },
      {
        path: "/auth-redirect",
        hidden: true,
      },
      {
        path: "/404",
        hidden: true,
      },
      {
        path: "/pdf/download",
        hidden: true,
      },
      {
        path: "/clipboard",
        component: {
          name: "Layout",
          components: {
            AppMain: {
              name: "AppMain",
              computed: {},
              staticRenderFns: [],
              _compiled: true,
              _scopeId: "data-v-078753dd",
              beforeCreate: [null],
              beforeDestroy: [null],
              __file: "src/layout/components/AppMain.vue",
              _Ctor: {},
            },
            Navbar: {
              components: {
                Breadcrumb: {
                  watch: {},
                  methods: {},
                  staticRenderFns: [],
                  _compiled: true,
                  _scopeId: "data-v-b50ef614",
                  beforeCreate: [null],
                  beforeDestroy: [null],
                  __file: "src/components/Breadcrumb/index.vue",
                  _Ctor: {},
                },
                Hamburger: {
                  name: "Hamburger",
                  props: {
                    isActive: {
                      default: false,
                    },
                  },
                  methods: {},
                  staticRenderFns: [],
                  _compiled: true,
                  _scopeId: "data-v-4e6f274c",
                  beforeCreate: [null],
                  beforeDestroy: [null],
                  __file: "src/components/Hamburger/index.vue",
                  _Ctor: {},
                },
                ErrorLog: {
                  name: "ErrorLog",
                  computed: {},
                  methods: {},
                  staticRenderFns: [],
                  _compiled: true,
                  _scopeId: "data-v-cf51e862",
                  beforeCreate: [null],
                  beforeDestroy: [null],
                  __file: "src/components/ErrorLog/index.vue",
                  _Ctor: {},
                },
                Screenfull: {
                  name: "Screenfull",
                  beforeDestroy: [null, null],
                  methods: {},
                  staticRenderFns: [],
                  _compiled: true,
                  _scopeId: "data-v-29234bee",
                  beforeCreate: [null],
                  __file: "src/components/Screenfull/index.vue",
                  _Ctor: {},
                },
                SizeSelect: {
                  computed: {},
                  methods: {},
                  staticRenderFns: [],
                  _compiled: true,
                  beforeCreate: [null],
                  beforeDestroy: [null],
                  __file: "src/components/SizeSelect/index.vue",
                  _Ctor: {},
                },
                Search: {
                  name: "HeaderSearch",
                  computed: {},
                  watch: {},
                  methods: {},
                  staticRenderFns: [],
                  _compiled: true,
                  _scopeId: "data-v-032bd1f0",
                  beforeCreate: [null],
                  beforeDestroy: [null],
                  __file: "src/components/HeaderSearch/index.vue",
                  _Ctor: {},
                },
              },
              computed: {},
              methods: {},
              staticRenderFns: [],
              _compiled: true,
              _scopeId: "data-v-d16d6306",
              beforeCreate: [null],
              beforeDestroy: [null],
              __file: "src/layout/components/Navbar.vue",
              _Ctor: {},
            },
            RightPanel: {
              name: "RightPanel",
              props: {
                clickNotClose: {
                  default: false,
                },
                buttonTop: {
                  default: 250,
                },
              },
              computed: {},
              watch: {},
              beforeDestroy: [null, null],
              methods: {},
              staticRenderFns: [],
              _compiled: true,
              _scopeId: "data-v-1e488bfb",
              beforeCreate: [null],
              __file: "src/components/RightPanel/index.vue",
              _Ctor: {},
            },
            Settings: {
              components: {
                ThemePicker: {
                  computed: {},
                  watch: {
                    defaultTheme: {
                      immediate: true,
                      user: true,
                    },
                  },
                  methods: {},
                  staticRenderFns: [],
                  _compiled: true,
                  beforeCreate: [null],
                  beforeDestroy: [null],
                  __file: "src/components/ThemePicker/index.vue",
                  _Ctor: {},
                },
              },
              computed: {
                fixedHeader: {},
                tagsView: {},
                sidebarLogo: {},
              },
              methods: {},
              staticRenderFns: [],
              _compiled: true,
              _scopeId: "data-v-126b135a",
              beforeCreate: [null],
              beforeDestroy: [null],
              __file: "src/layout/components/Settings/index.vue",
              _Ctor: {},
            },
            Sidebar: {
              components: {
                SidebarItem: {
                  name: "SidebarItem",
                  components: {
                    Item: {
                      name: "MenuItem",
                      functional: true,
                      props: {
                        icon: {
                          default: "",
                        },
                        title: {
                          default: "",
                        },
                      },
                      _scopeId: "data-v-31ea41b3",
                      __file: "src/layout/components/Sidebar/Item.vue",
                      _Ctor: {},
                    },
                    AppLink: {
                      props: {
                        to: {
                          required: true,
                        },
                      },
                      computed: {},
                      methods: {},
                      staticRenderFns: [],
                      _compiled: true,
                      beforeCreate: [null],
                      beforeDestroy: [null],
                      __file: "src/layout/components/Sidebar/Link.vue",
                      _Ctor: {},
                    },
                  },
                  mixins: [
                    {
                      computed: {},
                      methods: {},
                    },
                  ],
                  props: {
                    item: {
                      required: true,
                    },
                    isNest: {
                      default: false,
                    },
                    basePath: {
                      default: "",
                    },
                  },
                  methods: {},
                  staticRenderFns: [],
                  _compiled: true,
                  beforeCreate: [null],
                  beforeDestroy: [null],
                  __file: "src/layout/components/Sidebar/SidebarItem.vue",
                  _Ctor: {},
                },
                Logo: {
                  name: "SidebarLogo",
                  props: {
                    collapse: {
                      required: true,
                    },
                  },
                  staticRenderFns: [],
                  _compiled: true,
                  _scopeId: "data-v-6494804b",
                  beforeCreate: [null],
                  beforeDestroy: [null],
                  __file: "src/layout/components/Sidebar/Logo.vue",
                  _Ctor: {},
                },
              },
              methods: {},
              computed: {},
              staticRenderFns: [],
              _compiled: true,
              beforeCreate: [null],
              beforeDestroy: [null],
              __file: "src/layout/components/Sidebar/index.vue",
              _Ctor: {},
            },
            TagsView: {
              components: {
                ScrollPane: {
                  name: "ScrollPane",
                  computed: {},
                  beforeDestroy: [null, null],
                  methods: {},
                  staticRenderFns: [],
                  _compiled: true,
                  _scopeId: "data-v-be6b7bae",
                  beforeCreate: [null],
                  __file: "src/layout/components/TagsView/ScrollPane.vue",
                },
              },
              computed: {},
              watch: {},
              methods: {},
              staticRenderFns: [],
              _compiled: true,
              _scopeId: "data-v-fac8ca64",
              beforeCreate: [null],
              beforeDestroy: [null],
              __file: "src/layout/components/TagsView/index.vue",
              _Ctor: {},
            },
          },
          mixins: [
            {
              watch: {},
              methods: {},
            },
          ],
          computed: {},
          methods: {},
          staticRenderFns: [],
          _compiled: true,
          _scopeId: "data-v-13877386",
          beforeCreate: [null],
          beforeDestroy: [null],
          __file: "src/layout/index.vue",
          _Ctor: {},
        },
        children: [
          {
            path: "index",
            name: "ClipboardDemo",
            meta: {
              title: "Clipboard",
              icon: "clipboard",
            },
          },
        ],
      },
    ];
    this.sidebar = {
      opened: true,
      withoutAnimation: false,
    };
    this.searchPool = this.generateRoutes(this.routes)

  },
  methods: {
    click() {
      this.show = !this.show
      if (this.show) {
        this.$refs.headerSearchSelect && this.$refs.headerSearchSelect.focus()
      }
    },
    close() {
      this.$refs.headerSearchSelect && this.$refs.headerSearchSelect.blur()
      this.options = []
      this.show = false
    },
    change(val) {
      this.$router.push(val.path)
      this.search = ''
      this.options = []
      this.$nextTick(() => {
        this.show = false
      })
    },
    initFuse(list) {
      this.fuse = new Fuse(list, {
        shouldSort: true,
        threshold: 0.4,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: [{
          name: 'title',
          weight: 0.7
        }, {
          name: 'path',
          weight: 0.3
        }]
      })
    },
    // Filter out the routes that can be displayed in the sidebar
    // And generate the internationalized title
    generateRoutes(routes, basePath = '/', prefixTitle = []) {
      let res = []

      for (const router of routes) {
        // skip hidden router
        if (router.hidden) { continue }

        const data = {
          path: path.resolve(basePath, router.path),
          title: [...prefixTitle]
        }

        if (router.meta && router.meta.title) {
          data.title = [...data.title, router.meta.title]

          if (router.redirect !== 'noRedirect') {
            // only push the routes with title
            // special case: need to exclude parent router without redirect
            res.push(data)
          }
        }

        // recursive child routes
        if (router.children) {
          const tempRoutes = this.generateRoutes(router.children, data.path, data.title)
          if (tempRoutes.length >= 1) {
            res = [...res, ...tempRoutes]
          }
        }
      }
      return res
    },
    querySearch(query) {
      if (query !== '') {
        this.options = this.fuse.search(query)
      } else {
        this.options = []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.header-search {
  font-size: 0 !important;

  .search-icon {
    cursor: pointer;
    font-size: 18px;
    vertical-align: middle;
  }

  .header-search-select {
    font-size: 18px;
    transition: width 0.2s;
    width: 0;
    overflow: hidden;
    background: transparent;
    border-radius: 0;
    display: inline-block;
    vertical-align: middle;

    ::v-deep .el-input__inner {
      border-radius: 0;
      border: 0;
      padding-left: 0;
      padding-right: 0;
      box-shadow: none !important;
      border-bottom: 1px solid #d9d9d9;
      vertical-align: middle;
    }
  }

  &.show {
    .header-search-select {
      width: 210px;
      margin-left: 10px;
    }
  }
}
</style>
