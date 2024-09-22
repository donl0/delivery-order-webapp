# Crud application made with React + Ts + .NET Web api

## Show
![create](https://github.com/donl0/delivery-order-webapp/blob/readme-content/create-order.gif)
![eidt-orders](https://github.com/donl0/delivery-order-webapp/blob/readme-content/see-detail.gif)
![eidt-orders](https://github.com/donl0/delivery-order-webapp/blob/readme-content/eidt-orders.gif)
![delete-multiple](https://github.com/donl0/delivery-order-webapp/blob/readme-content/delete-multiple.gif)

## Run
```
git clone https://github.com/donl0/delivery-order-webapp.git
cd delivery-order-webapp
docker-compose up --build`
```

## Access
- Swagger http://localhost:8080/swagger/index.html 
- React http://localhost:3000

## Backend
- Simple 4 layers with fat [models](https://github.com/donl0/delivery-order-webapp/tree/main/backend/DeliveryOrderService/Domain/Models), which are encapsulated and isolated and responsible for their state.
- MediatR is [responsible](https://github.com/donl0/delivery-order-webapp/blob/main/backend/DeliveryOrderService/Application/CQRS/Orders/Commands/CreateOrder/CreateOrderCommandHandler.cs) for use cases.

## Frontend
- Form vadilation with ```react-hook-form```

## Local windows run
- Set env variables
  - ```setx REACT_APP_BACKEND_URL "https://localhost:7292"``` (it is what Web api shoud uses)
  - ```setx DbConnection "Host=db;Database=OrderService;Username=postgres;Password=12345"```

- .NET [sturtup file](https://github.com/donl0/delivery-order-webapp/blob/main/backend/DeliveryOrderService/DeliveryOrderService.sln)
- To run react use ```npm start```
