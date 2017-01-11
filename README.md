# 本项目不再维护，建议使用[fis3-postprocessor-autoprefixer](https://github.com/huixisheng/fis3-postprocessor-autoprefixer)

# fis3-preprocessor-autoprefixer
使用[postcss/autoprefixer](https://github.com/postcss/autoprefixer)于fis3构建工具的预处理器插件

##安装

`npm install [-g] fis3-preprocessor-autoprefixer`

##使用


```
fis.match('**.scss',{
    rExt: '.css', // from .scss to .css
    preprocessor : fis.plugin("autoprefixer",{
        "browsers": ["last 2 versions"]
    }),
    //其他预处理
    parser: fis.plugin('node-sass', {
        //fis-parser-sass option
        //if you want to use outputStyle option, you must install fis-parser-sass2 !
        outputStyle: 'expanded'
    })
})
```

> 关于browsers如何设置请参考[browserslist](https://github.com/ai/browserslist#queries)

##出现的原因

在百度找了一下相关插件是有的，但是用着发现使用的autoprefixer库都是旧的（且作者都没维护）导致使用时兼容不够全面，所以特意另开一个插件。
