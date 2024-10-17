import { api } from '../../services/api'

export const getPosts = async () => {
    const {data} = await api.get('/posts'); 

    if(data){
        return data;
    }

    return []
}

export const getPostBySlug = async (id) => {
    const { data } = await api.get(`/posts?select=eq.${id}`); // Faz a requisição do post com o id específico
    
    if(data) {
        return data; // Retorna o post encontrado
    }

    return {}; // Retorna um objeto vazio se não houver dados
}
