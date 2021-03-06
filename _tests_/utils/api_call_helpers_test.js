// import fetching_API from "../../src/utils/api-call";
const api_call_helpers = require("../../src/utils/api_call_helpers");
const data = require("../mocks/data.json");

const EXPECTED_JSON_TOP10 = [
	{
		"im:name": {
			"label": "The Greatest Showman (Original Motion Picture Soundtrack)"
		},
		"im:image": "https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/c1/7b/a9/c17ba975-34aa-ee68-d3c9-e1db840fa06b/075679886613.jpg/170x170bb-85.png",
		"im:price": {
			"label": "£9.99",
			"attributes": {
				"amount": "9.99000",
				"currency": "GBP"
			}
		},
		"im:artist": {
			"label": "Various Artists"
		},
		"id": {
			"label": "https://itunes.apple.com/gb/album/the-greatest-showman-original-motion-picture-soundtrack/1299856714?uo=2",
			"attributes": {
				"im:id": "1299856714"
			}
		}
	},
	{
		"im:name": {
			"label": "Trench"
		},
		"im:image": "https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/ac/67/13/ac671336-bff2-fcc0-3817-bfff5d7e746b/075679864789.jpg/170x170bb-85.png",
		"im:price": {
			"label": "£5.99",
			"attributes": {
				"amount": "5.99000",
				"currency": "GBP"
			}
		},
		"id": {
			"label": "https://itunes.apple.com/gb/album/trench/1422828208?uo=2",
			"attributes": {
				"im:id": "1422828208"
			}
		},
		"im:artist": {
			"label": "twenty one pilots",
			"attributes": {
				"href": "https://itunes.apple.com/gb/artist/twenty-one-pilots/349736311?uo=2"
			}
		}
	},
	{
		"im:name": {
			"label": "NOW That's What I Call Music! 100"
		},
		"im:image": "https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/ae/68/19/ae6819ac-5bcc-d655-013f-f2fc6a9467cd/886446964980.jpg/170x170bb-85.png",
		"im:price": {
			"label": "£12.99",
			"attributes": {
				"amount": "12.99000",
				"currency": "GBP"
			}
		},
		"id": {
			"label": "https://itunes.apple.com/gb/album/now-thats-what-i-call-music-100/1407924874?uo=2",
			"attributes": {
				"im:id": "1407924874"
			}
		},
		"im:artist": {
			"label": "Various Artists"
		}
	},
	{
		"im:name": {
			"label": "Dancing Queen"
		},
		"im:image": "https://is3-ssl.mzstatic.com/image/thumb/Music118/v4/0d/93/50/0d935081-6492-cb68-eca1-93a70e79e8ff/093624904427.jpg/170x170bb-85.png",
		"im:price": {
			"label": "£8.99",
			"attributes": {
				"amount": "8.99000",
				"currency": "GBP"
			}
		},
		"id": {
			"label": "https://itunes.apple.com/gb/album/dancing-queen/1421985829?uo=2",
			"attributes": {
				"im:id": "1421985829"
			}
		},
		"im:artist": {
			"label": "Cher",
			"attributes": {
				"href": "https://itunes.apple.com/gb/artist/cher/106158?uo=2"
			}
		}
	},
	{
		"im:name": {
			"label": "Songs for the Car"
		},
		"im:image": "https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/49/15/c2/4915c254-8b28-ba26-953f-ef480f1b9d2b/190295604950.jpg/170x170bb-85.png",
		"im:price": {
			"label": "£4.99",
			"attributes": {
				"amount": "4.99000",
				"currency": "GBP"
			}
		},
		"id": {
			"label": "https://itunes.apple.com/gb/album/songs-for-the-car/1405637969?uo=2",
			"attributes": {
				"im:id": "1405637969"
			}
		},
		"im:artist": {
			"label": "Various Artists"
		}
	},
	{
		"im:name": {
			"label": "Blood Red Roses (Deluxe Version)"
		},
		"im:image": "https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/7e/c7/83/7ec7834c-84e1-aeca-3277-31ee52fd128f/00602567903581.rgb.jpg/170x170bb-85.png",
		"im:price": {
			"label": "£12.99",
			"attributes": {
				"amount": "12.99000",
				"currency": "GBP"
			}
		},
		"id": {
			"label": "https://itunes.apple.com/gb/album/blood-red-roses-deluxe-version/1412760617?uo=2",
			"attributes": {
				"im:id": "1412760617"
			}
		},
		"im:artist": {
			"label": "Rod Stewart",
			"attributes": {
				"href": "https://itunes.apple.com/gb/artist/rod-stewart/57471?uo=2"
			}
		}
	},
	{
		"im:name": {
			"label": "The Country Album"
		},
		"im:image": "https://is5-ssl.mzstatic.com/image/thumb/Music69/v4/9a/d9/0b/9ad90bd7-a8c4-ef20-3fee-36a5bf0b4c37/15UMGIM71829.jpg/170x170bb-85.png",
		"im:price": {
			"label": "£3.99",
			"attributes": {
				"amount": "3.99000",
				"currency": "GBP"
			}
		},
		"id": {
			"label": "https://itunes.apple.com/gb/album/the-country-album/1061118374?uo=2",
			"attributes": {
				"im:id": "1061118374"
			}
		},
		"im:artist": {
			"label": "Various Artists"
		}
	},
	{
		"im:name": {
			"label": "I Love the 90s - Ministry of Sound"
		},
		"im:image": "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/3b/e8/9c/3be89ccd-afae-cd5e-a739-8bdb6f23385e/5051275084757.jpg/170x170bb-85.png",
		"im:price": {
			"label": "£6.99",
			"attributes": {
				"amount": "6.99000",
				"currency": "GBP"
			}
		},
		"id": {
			"label": "https://itunes.apple.com/gb/album/i-love-the-90s-ministry-of-sound/1217232279?uo=2",
			"attributes": {
				"im:id": "1217232279"
			}
		},
		"im:artist": {
			"label": "Various Artists"
		}
	},
	{
		"im:name": {
			"label": "Mamma Mia! Here We Go Again (Original Motion Picture Soundtrack)"
		},
		"im:image": "https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/03/91/9d/03919d91-383d-11b0-f1cb-d6ff42bfe8cf/00602567666585.rgb.jpg/170x170bb-85.png",
		"im:price": {
			"label": "£10.99",
			"attributes": {
				"amount": "10.99000",
				"currency": "GBP"
			}
		},
		"id": {
			"label": "https://itunes.apple.com/gb/album/mamma-mia-here-we-go-again-original-motion-picture/1380464428?uo=2",
			"attributes": {
				"im:id": "1380464428"
			}
		},
		"im:artist": {
			"label": "Cast Of “Mamma Mia! Here We Go Again”",
			"attributes": {
				"href": "https://itunes.apple.com/gb/artist/cast-of-mamma-mia-here-we-go-again/1379051690?uo=2"
			}
		}
	},
	{
		"im:name": {
			"label": "Wanderer"
		},
		"im:image": "https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/6c/92/eb/6c92eb16-b5ad-4d32-c2cb-380221759188/dj.yylhfvsy.jpg/170x170bb-85.png",
		"im:price": {
			"label": "£5.99",
			"attributes": {
				"amount": "5.99000",
				"currency": "GBP"
			}
		},
		"id": {
			"label": "https://itunes.apple.com/gb/album/wanderer/1400247975?uo=2",
			"attributes": {
				"im:id": "1400247975"
			}
		},
		"im:artist": {
			"label": "Cat Power",
			"attributes": {
				"href": "https://itunes.apple.com/gb/artist/cat-power/2959120?uo=2"
			}
		}
	}
]

test("Should return the first 10 songs' data from APi response", () => {
   let actualRes = api_call_helpers.getTop10Songs(data.feed.entry);
	expect(actualRes).toEqual(EXPECTED_JSON_TOP10);
});
