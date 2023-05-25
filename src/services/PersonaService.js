import http from "../http-common";

class PersonaService {
    getAll(){
        return http.get('/personas');
    }
} 
export default new PersonaService();
