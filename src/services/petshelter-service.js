export default class PetShelterService {

    desc = "Lorem ipsum dolor sit amet," +
        " consectetur adipiscing elit." +
        " Fusce efficitur blandit condimentum." +
        " Proin accumsan lorem vel gra vida fringilla." +
        " Suspendisse potenti. Mauris ut pulvinar nunc." +
        " Donec consectetur, diam in porta tempus, urna" +
        " ligula ves tibulum nibh.";

    data =[
        {
            id: 1,
            name: "Fryman",
            breed: "St. Bernard",
            age: "3 month",
            inoculations: "done",
            diseases: "none",
            parasites: "none",
            desc: this.desc,
            urlPhoto: "http://pngimg.com/uploads/dog/dog_PNG50366.png"
        },
        {
            id: 2,
            name: "Murka",
            breed: "Pooch",
            age: "4 month",
            inoculations: "done",
            diseases: "none",
            parasites: "none",
            desc: this.desc,
            urlPhoto: "http://pngimg.com/uploads/cat/cat_PNG50497.png"
        },
        {
            id: 3,
            name: "Lana",
            breed: "Pitbull",
            age: "1.7 years",
            inoculations: "done",
            diseases: "none",
            parasites: "none",
            desc: this.desc,
            urlPhoto: "http://pngimg.com/uploads/dog/dog_PNG50327.png"
        },
        {
            id: 4,
            name: "Rizhyk",
            breed: "Norway cat",
            age: "3 years",
            inoculations: "done",
            diseases: "none",
            parasites: "none",
            desc: this.desc,
            urlPhoto: "http://pngimg.com/uploads/cat/cat_PNG50448.png"
        },
        {
            id: 5,
            name: "Mappo",
            breed: "Australian Shepherd",
            age: "5 month",
            inoculations: "done",
            diseases: "none",
            parasites: "none",
            desc: this.desc,
            urlPhoto: "http://pngimg.com/uploads/dog/dog_PNG135.png"
        },
        {
            id: 6,
            name: "Boo",
            breed: "Pooch",
            age: "2 years",
            inoculations: "done",
            diseases: "none",
            parasites: "none",
            desc: this.desc,
            urlPhoto: "http://pngimg.com/uploads/cat/cat_PNG50521.png"
        }
    ]

    getPets() {
        return new Promise((resolve, reject) => {
            if(Math.random() > 0.75) {
                reject(new Error("Bad req"));
            } else {
                setTimeout(() => {
                    resolve(this.data)
                }, 1000);
            };
        });
    };
};
