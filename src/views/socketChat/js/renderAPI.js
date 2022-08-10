/**
 * @file 该文件提供对外开放的 API
 */
import  ModuleMain  from "./ModuleMain";

// 单例。
let apiInstance = undefined;

const renderAPI = () => {
  if (typeof apiInstance === "undefined") {
    // 初始化
    let main = undefined;
    const checkInit = () => {
      if (typeof main === "undefined") {
        throw "请先执行初始化 API 'initialize'";
      }
    };
    apiInstance = {
      // 创建三维渲染的业务层实例
      initialize: (canvas,config) => {

        return new Promise((resolve, reject) => {
          if (canvas) {
            main = new ModuleMain(canvas,config);
            main.initControlRole()
            resolve(apiInstance);
          } else {
            reject("初始化参数异常");
          }
        });
      },
      startRender: () => {
        checkInit();
        main.initAnimate();
      },
    };
  }
  return apiInstance;
};

export { renderAPI };
