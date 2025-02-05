/**
 * @Author: forguo
 * @Date: 2023/2/23 17:04
 * @Description: index.ts
 */
import { createRouter, createWebHistory } from 'vue-router'

// 路由集合
const routes = [
    {
        path: '/',
        name: 'Home',
        title: '首页',
        component: () => import('@/views/Home/index.vue'),
        meta: {
            name: 'Home',
            title: '首页'
        }
    }
]

// 匹配到的文件默认是懒加载的，通过动态导入实现，并会在构建时分离为独立的 chunk。如果你倾向于直接引入所有的模块（例如依赖于这些模块中的副作用首先被应用），你可以传入 { eager: true } 作为第二个参数：
const views = import.meta.glob(`@/views/*/index.vue`, { eager: true })

// 动态加载路由
for (const componentPath in views) {
    const module: any = views[componentPath]
    const match: Array<any> = componentPath.match(/..\/views\/(\w+)/) || []
    /// 匹配到的路由名称
    const routerName = match[1]
    // 默认首页必须得
    if (routerName && routerName !== 'Home') {
        // 找到example的组件，并加载
        const $component = module.default
        const routerTitle = $component.title
        const title = routerTitle || routerName
        routes.push({
            path: routerName === 'Home' ? '/' : `/${routerName}`,
            name: routerName,
            title,
            component: $component,
            meta: {
                name: routerName,
                title
            }
        })
    }
}

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [...routes]
})

export const menus = routes.map((item: any) => {
    delete item.component
    return {
        ...item
    }
})

export default router
