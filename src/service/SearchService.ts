import axios from "axios";
import { Results } from "../models/Results";

const apiKey = import.meta.env.REACT_APP_API_KEY;

class SearchService {
  private URL = 'https://webservice.recruit.co.jp/gourmet/v1/?key=' + apiKey + '&large_area=Z011';

  public async getShops() : Promise<Results>{
    const res = await axios.get<Results>(this.URL);
    return res.data;
  }
}

export default new SearchService()
