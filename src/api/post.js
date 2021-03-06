import request from '../utils/request'

//列表
export function getArticleList(pageNo,size,tab) {
    return request({
        url: '/post/list',
        method: 'get',
        params: {pageNo: pageNo,size: size,tab: tab}
    })
}

//发帖
export function post(topic) {
    return request({
        url: '/post/create',
        method: 'post',
        data: topic
    })
}

//帖子详情、浏览
export function getTopicDetail(id) {
    return request({
        url: `/post`,
        method: 'get',
        params: {
            id: id
        }
    })
}

// 获取详情页文章推荐
export function getRecommendTopics(id) {
    return request({
        url: '/post/recommend',
        method: 'get',
        params: {
            topicId: id
        }
    })
}

//删除帖子
export function deleteTopic(id) {
    return request({
        url: `/post/delete/${id}`,
        method: 'delete'
    })
}

//更新帖子
export function update(data) {
    return request({
        url: '/post/update',
        method: 'post',
        data:data
    })
}