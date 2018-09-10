module.exports = {
    devtool:'eval-source-map',
    //唯一的入口文件
    entry : __dirname+'/app/main.js',
    //打包之后的文件该输出到哪个位置
    output : {
        path:__dirname+'/public',
        filename:'bulid_main.js'
    },
    //devServer 2.9.5 启动自带热更新
    //并且他会监测所依赖的模块是否修改
    //我们update code =>状态触发=.重新打包=>触发刷新
    devServer: {
        //本地服务器  所加载的页面所在的目录
        contentBase:'./public',
        //服务器端口=>默认端口8080
        port :'8888',
        //自动刷新
        //inline:true


    },
    module:{
        rules:[
            {
                //必须要有的  一个用以匹配loaders所处理的扩展名的
                //   正则表达式
                test:/\.js$/,
                //后面配置的是  loader的名称
                use:'babel-loader',
                //include/exclude  必须处理文件
                //和 需要屏蔽的文件

                exclude:/node_modules/
            },
            //安装 style-loader 与 css-loader
            {
                test:/\.css$/,
                //配置多个loader时候 use=>value 是  数组
                //如果没有额外配置 直接string
                //如果哦有额外配置  为json对象
                use:[
                    'style-loader',
                    {
                        loader:'css-loader',
                        options:{
                            //把css当成  模块=<json对象来看待
                            modules:true,
                            localIdentName:'[name]__[local]--[hash:base64:5]'
                        }
                    }
                ]
            },
            //打包图片 flie-loader / url-loader
            {
                //图片格式正则
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        // 配置 url-loader 的可选项
                        options: {
                            // 限制 图片大小 10000B，小于限制会将图片转换为
                            // base64格式
                            limit: 10000,
                            // 超出限制，创建的文件格式
                            // build/images/[图片名].[hash].[图片格式]
                            name: 'images/[name].[hash].[ext]'
                        }
                    }
                ]

            }
        ]
    }
}