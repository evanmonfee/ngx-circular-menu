export class MenuItemsModel {
    menuOneLabel: string;
    menuOneIcon: string;
    menuTwoLabel: string;
    menuTwoIcon: string;
    menuThreeLabel: string;
    menuThreeIcon: string;
    menuFourLabel: string;
    menuFourIcon: string;

    constructor($menuOneLabel: string, $menuOneIcon: string, $menuTwoLabel: string, $menuTwoIcon: string, $menuThreeLabel: string, $menuThreeIcon: string,
        $menuFourLabel: string, $menuFourIcon: string,
        ) {
		this.menuOneLabel = $menuOneLabel;
		this.menuOneIcon = $menuOneIcon;
        this.menuTwoLabel = $menuTwoLabel;
		this.menuTwoIcon = $menuTwoIcon;
        this.menuThreeLabel = $menuThreeLabel;
        this.menuThreeIcon = $menuThreeIcon;
        this.menuFourLabel = $menuFourLabel;
        this.menuFourIcon = $menuFourIcon;
	}

}