import { accountServices } from "./account.services"

const Header = (token) => {
    if(accountServices.saveToken(token)){
        return {
            'Authorization': 'Bearer ' +token, 'Content-Type': 'application/json'
          }
    }
}

export const headerService = { Header } ;