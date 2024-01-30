class CatsService {
  baseUrl: string;
  apiKey: string;

  constructor() {
    this.baseUrl = "https://api.thecatapi.com/v1/images";
    this.apiKey =
      "api_key=live_PEVVCTT8ayARlZrRjyaNaSq0cQdUpOutEGOX4gePe6Zo1ZBx5Hb3Cx9kyMEPshtg";
  }
  async getCats() {
    return await fetch(`${this.baseUrl}/search?limit=20`, {
      headers: {
        "x-api-key": this.apiKey,
      },
    }).then((res) => res.json()).catch(err => console.error(err)
    );
  }
}

export default new CatsService();
