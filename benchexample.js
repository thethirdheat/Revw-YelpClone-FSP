/* 
jbuilder for index.json.jbuilder
@bizs.each do |biz|
  json.set! biz.id do
    json.extract! biz, :id, :business_name, :description, :address, :phone_number, :business_type
    json.photoUrl url_for(biz.photo)
  end
end
*//
/*blue birds saples state */
sampleState ={
  entities: {
    chirps: {
      1: {
        id: 1,
        body: "bluebirds like blueberries",
        authorId: 11,
      },
      2: {
        id: 2,
        body: "bluebirds also like blue potatoes",
        authorId: 25,
      },
      3: {
        id: 3,
        body: "bluebirds are more like fruit",
        authorId: 11,
      }
    },
    users: {
      11: {
        id: 11,
        username: "blue_macaw",
        authoredChirpIds: [1, 3],        
      },
      25: {
        id: 25,
        username: "blue_toucan",
        authoredChirpIds: [2],
        imgUrl: "https://cdn.pixabay.com/photo/2015/10/01/16/43/toucan-967334_960_720.jpg"
      }
    },
    chirpLikes: {
      10: {
        likerId: 11,
        chirpId: 1,
      },
      11: {
        likerId: 25,
        chirpId: 1,
      },
      12: {
        likerId: 25,
        chirpId: 3,
      },
    }
  },
  ui: {
    loading: true/false
  },
  errors: {
    login: ["Incorrect username/password combination"],
    chirpForm: ["Chirp body cannot be blank"],
  },
  session: { currentUserId: 25 }
}
/*this is the index  */
index={
    1: {
        id: 1,
        description: "alamo square, many dogs",
        lat: 37.775769,
        lng: -122.43496,
        seating: 4,
        picture_url: "https://c2.staticflickr.com/4/3035/2309664044_486f5a0327_z.jpg?zz=1",
        average_rating: "5.0",
        reviewIds: [ ]
    },
    2: {
        id: 2,
        description: "UN plaza, food truck access",
        lat: 37.77976,
        lng: -122.41382,
        seating: 2,
        picture_url: "http://www.concretedecor.net/CD/assets/Image/archives/CD1405/1405i_Page_32_Image_0001_600.jpg",
        average_rating: null,
        reviewIds: [ ]
    },
        3: {
        id: 3,
        description: "Ocean Beach, gnarly breh",
        lat: 37.769996,
        lng: -122.511281,
        seating: 3,
        picture_url: "http://marmaladeandmileposts.com/wp-content/uploads/2012/05/2012-4-16-San-Francisco-Road-Trip-San-Francisco-1301.jpg",
        average_rating: null,
        reviewIds: [ ]
    }
}
/* this is the show page of one bench */
oneBench={
    bench: {
        id: 1,
        description: "alamo square, many dogs",
        lat: 37.775769,
        lng: -122.43496,
        seating: 4,
        picture_url: "https://c2.staticflickr.com/4/3035/2309664044_486f5a0327_z.jpg?zz=1",
        average_rating: "5.0",
        reviewIds: [
            1
        ]
    },
    reviews: {
        1: {
            id: 1,
            rating: 5,
            body: "fdsa",
            bench_id: 1,
            author_id: 2
        }
    },
    authors: {
        2: {
            id: 2,
            username: "sdfaasdf"
        }
    }
}