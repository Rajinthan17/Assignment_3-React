import axios from 'axios';

const BOOK_URL = 'http://localhost:8081/book';

class BookService {

    AddBook(book){
        return axios.post(BOOK_URL,book,{headers : {"Authorization" : "Basic " + localStorage.getItem('token')}})
    }

    GetAllBook(){
        return axios.get(BOOK_URL,{headers : {"Authorization" : "Basic " + localStorage.getItem('token')}})
    }

    GetBookInPage(sort,pageNo){
        return axios.get(BOOK_URL + "/page?sort=" + sort + "&pageNo=" + pageNo ,{headers : {"Authorization" : "Basic " + localStorage.getItem('token')}})
    }

    GetSearchedBooks(pageNo,Search,sort){
        return axios.get(BOOK_URL + "/serached?serched=" + Search + "&pageNo=" + pageNo,{headers : {"Authorization" : "Basic " + localStorage.getItem('token')}})
    }

    DeleteBookById(id){
        return axios.delete(BOOK_URL + "/" + id,{headers : {"Authorization" : "Basic " + localStorage.getItem('token')}})
    }

    GetById(id){
        return axios.get(BOOK_URL + "/" + id,{headers : {"Authorization" : "Basic " + localStorage.getItem('token')}})
    }

    UpdateBook(id,book){
        return axios.put(BOOK_URL + "/" + id,book,{headers : {"Authorization" : "Basic " + localStorage.getItem('token')}})
    }

}

export default new BookService();