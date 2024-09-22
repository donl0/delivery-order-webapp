# Show
![create](https://github.com/donl0/delivery-order-webapp/blob/readme-content/create-order.gif)
![eidt-orders](https://github.com/donl0/delivery-order-webapp/blob/readme-content/see-detail.gif)
![eidt-orders](https://github.com/donl0/delivery-order-webapp/blob/readme-content/eidt-orders.gif)
![delete-multiple](https://github.com/donl0/delivery-order-webapp/blob/readme-content/delete-multiple.gif)

# Run
git clone https://github.com/donl0/delivery-order-webapp.git
cd delivery-order-webapp
docker-compose up --build

# Access
Swagger http://localhost:8080/swagger/index.html 
React http://localhost:3000

# Local windows run
- Set env variables
```setx REACT_APP_BACKEND_URL "https://localhost:7292"``` (it is what Web api shoud use)
```setx DbConnection "Host=db;Database=OrderService;Username=postgres;Password=12345"```

- .NET [sturtup file](https://github.com/donl0/delivery-order-webapp/blob/main/backend/DeliveryOrderService/DeliveryOrderService.sln)
- To run react use ```npm start```
