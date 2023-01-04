export const productModelList = [
    {
        "IDproduct": 1,
        "name": "AxceletronDB120",
        "price": 100,
        "productionDate": "2022.04.19",
        "endDistributionDate": "2023.11.23"
    },
    {
        "IDproduct": 2,
        "name": "Basix",
        "price": 50,
        "productionDate": "2021.12.03",
        "endDistributionDate": ""
    },
    {
        "IDproduct": 3,
        "name": "PlasticSeries Friend 360",
        "price": 20,
        "productionDate": "2022.10.28",
        "endDistributionDate": "2023.03.11"
    }
]

export const productModelDetailsList = [
    {
        "IDproduct": 1,
        "name": "AxceletronDB120",
        "price": 100,
        "productionDate": "2022.04.19",
        "endDistributionDate": "2023.11.23",
        "ordereds": [
            {
                "IDorderedProduct": 1,
                "quantity": 1,
                "IDproduct": 1,
                "IDorder": 1
            },
            {
                "IDorderedProduct": 2,
                "quantity": 5,
                "IDproduct": 1,
                "IDorder": 1
            }
        ]
    },
    {
        "IDproduct": 2,
        "name": "Basix",
        "price": 50,
        "productionDate": "2021.12.03",
        "endDistributionDate": "",
        "ordereds": [
            {
                "IDorderedProduct": 3,
                "quantity": 2,
                "IDproduct": 2,
                "IDorder": 2
            },
            {
                "IDorderedProduct": 4,
                "quantity": 6,
                "IDproduct": 2,
                "IDorder": 3
            }
        ]
    },
    {
        "IDproduct": 3,
        "name": "PlasticSeries Friend 360",
        "price": 20,
        "productionDate": "2022.10.28",
        "endDistributionDate": "2023.03.11",
        "ordereds": [
            {
                "IDorderedProduct": 5,
                "quantity": 1,
                "IDproduct": 3,
                "IDorder": 4
            },
            {
                "IDorderedProduct": 6,
                "quantity": 12,
                "IDproduct": 3,
                "IDorder": 5
            }
        ]
    }
]