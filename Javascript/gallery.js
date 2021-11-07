let cars = [
    {
        pix: 'cold-1',
        name: 'Rolls Royce Cullinan',
        price: 'Avg. Cost: $335,350',
    },

    {
        pix: 'cold-2',
        name: 'Range Rover Sport',
        price: 'Avg. Cost: $92,000',
    },

    {
        pix: 'cold-3',
        name: 'Audi A4',
        price: 'Avg. Cost: $40,000',
    },

    {
        pix: 'cold-4',
        name: 'Lamborghini',
        price: 'Avg. Cost: $394,000',
    },

    {
        pix: 'cold-5',
        name: 'BMW M3 Coupe',
        price: 'Avg. Cost: $70,000',
    },

    {
        pix: 'cold-6',
        name: 'Porsche 911',
        price: 'Avg. Cost: $100,000',
    },

    {
        pix: 'cold-7',
        name: 'Ford Mustang GT',
        price: 'Avg. Cost: $33,000',
    },

    {
        pix: 'cold-8',
        name: 'Ford Shelby GT 500',
        price: 'Avg. Cost: $71,000',
    },

    {
        pix: 'cold-9',
        name: 'Mercedes AMG GT',
        price: 'Avg. Cost: $90,000',
    },

    {
        pix: 'cold-10',
        name: 'Ferrari 458 Italia',
        price: 'Avg. Cost: $233,000',
    },

    {
        pix: 'cold-11',
        name: 'Porsche Sedan',
        price: 'Avg. Cost: $88,000',
    },

    {
        pix: 'cold-12',
        name: 'Audi A8',
        price: 'Avg. Cost: $87,000',
    }
]

let carSection = document.getElementById('cars-wavy');
let html = "";
cars.forEach(e => {
    html += `
        <div class=" rounded my-4 w-70 d-flex">
            <div class="bg-white rounded d-flex">
                <div class="d-flex sweg">
                    <div class="rounded pix" style="background-image: url(./images/${e.pix}.jpg);">
                    </div>
                    <div class=" write d-flex flex-column align-items-center justify-content-center bg-white m-auto px-4 w-50">
                        <h4 class="name text-center">${e.name}</h4>
                        <h5 class=" text-center price mt-2"> ${e.price}</h5>
                    </div>
                </div>
            </div>
        </div>

    `
    console.log(e)

    carSection.innerHTML = html
})