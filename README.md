# NgxCircularMenu

**ngx-circular-menu**: Add unique **circular menus** to your application, similar to the Floating Action Button (FAB) in android. You can add 4 menu items to this menu.


![Radial Menu](https://i.imgur.com/Yab9wFk.png)

![enter image description here](https://i.imgur.com/Vd2klR1.png)

# Installation
### 1. NPM Installation
Now install  `ngx-circular-menu`  via npm:

`npm install ngx-circular-menu`

### 2. Import the library
Once installed you need to import the main module:

```javascript
import { NgxCircularMenuModule } from  'ngx-circular-menu'; <---

 @NgModule({
    declarations: [
    AppComponent,
    ],
    imports: [
    BrowserModule,
    AppRoutingModule,
    NgxCircularMenuModule, <----
    ],
    providers: [],
    bootstrap: [AppComponent]
    })
    export  class AppModule { }
```

## Usage
**1. In the .html file:**
```html
    <lib-ngx-circular-menu  
      [menuItemsModelData]='menuItemsModel'  
      (menuItemOneClick)='goToDashboard()' 
      (menuItemTwoClick)='goToSearch()' 
      (menuItemThreeClick)='goToWishlist()' 
      (menuItemFourClick)='goToLogout()'>
    </lib-ngx-circular-menu>
   ```

**2. In the .ts file:**

```javascript
    menuItemsModel: MenuItemsModel;

    setRadialMenu() {
      this.menuItemsModel = new MenuItemsModel(
      "Dashboard", 'assets/icons/icn_drawdowns.svg',
      "Search", 'assets/icons/icn_search_white.svg',
      "Wishlist", 'assets/icons/icn_to-do-list.svg',
      "Logout", 'assets/icons/logout.svg'
     );
    }
```

**3. Sample component:**
**app-component.html**
```html
    <lib-ngx-circular-menu  
      [menuItemsModelData]='menuItemsModel'  
      (menuItemOneClick)='goToDashboard()' 
      (menuItemTwoClick)='goToSearch()' 
      (menuItemThreeClick)='goToWishlist()' 
      (menuItemFourClick)='goToLogout()'>
    </lib-ngx-circular-menu>
   ```
   
   **app-component.ts**
```javascript
export class AppComponent implements OnInit{

title = 'radial-menu';
menuItemsModel: MenuItemsModel;

ngOnInit(){
this.setRadialMenu();
}

setRadialMenu() {
this.menuItemsModel = new MenuItemsModel(
"Dashboard", 'assets/icons/icn_drawdowns.svg',
"Search", 'assets/icons/icn_search_white.svg',
"Wishlist", 'assets/icons/icn_to-do-list.svg',
"Logout", 'assets/icons/logout.svg'
);
}

goToDashboard() {
console.log('goToDashboard clicked..');
}

goToSearch() {
console.log('goToSearch clicked..');
}

goToWishlist() {
console.log('goToWishlist clicked..');
}

goToLogout() {
console.log('goToLogout clicked..');
}

}
```

## Demo
View the application demo in GITHUB.

[Demo Source](https://github.com/evanmonfee/ngx-circular-menu-demo)