<h1 align='center'>Khet Market</h1>

<p align='center'><img src='https://image.freepik.com/free-photo/detail-rice-plant-sunset-valencia-with-plantation-out-focus-rice-grains-plant-seed_181624-25838.jpg' /></p>

**Khet Market** is a web-app through which farmers can sell crops to and buy equipment directly from other merchants without any third-party mediation.To avoid price inflation and maintain regularized selling, the app validates any purchase through the use of MSP for pricing and the buyer must adhere to it.The app also incorporates image integration for crops so the buyer can decide whether to proceed with the transaction.The app also incorporate payment authentication which help both parties avoid extra middleman costs and helps in creating of a completely self – independent virtual market space to empower both the buyer and seller.

### Flowchart

<p align='center'><img src='flowchart.jpeg' /></p>

### Sections

These are the main pages of our web app along with the description.

1. **Home Page** - This is the home page of our application. It details all the utilities our app provides.

2. **Login** - This page lets the registered user to login into his/her dashboard.

3. **Register** - The user can register himself/herself by filling out the appropriate choices and details asked for the verification. We have integrated a minimum character limit to rule out vague and ambigious details.

4. **BuyOrSell** - This page acts as a gateway and provides the user to choice between buying goods and selling crops and redirects them to the appropriate page.

5. **Buy**: In this section, we designed an E-commerce kind of front-end where a farmer can purchase farming products like seeds, fertilizers, tractors, etc.

6. **Checkout** - This is the landing page after the user has selected his items and proceed further to review the items they added in the basket.

7. **Payment** - Here, the user can fill the details for completing the transaction.

8. **Orders** - This page helps the user to review their purchased items along with their unique order ids, address, and costs.

### Steps to setup in the local system

1. Clone this repository - ```git clone https://github.com/pranjals149/Khet-Market.git```
2. Move into the cloned repository - ```cd Khet-Market```
3. Now, install the required dependencies - ```npm install```
4. Move in the **funtions** directory - ```cd functions```
5. Now, inside **functions** directory, install the required dependencies for running the backend server of the app - ```npm i```
6. Inside the **functions** directory, start the express backend server - ```firebase emulators:start```
7. Now, back to the main project directory, start the react development server - ```npm start```
8. Now the application is Up and running on PORT NO. - **3000**
 

