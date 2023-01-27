import {
    Menu,
    MenuItem,
    MenuButton,
    SubMenu
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import { MenuIcon } from '../../icons/icons';

export default function ReactMenu() {
    return (
        <Menu menuButton={<MenuButton><MenuIcon /></MenuButton>}>
            <MenuItem>همه کالاها</MenuItem>
            <SubMenu label="همه کالاها">
                <MenuItem>الکترونیک</MenuItem>
                <MenuItem>پوشاک</MenuItem>
                <SubMenu label="همه کالاها">
                    <MenuItem>صمعتی</MenuItem>
                    <MenuItem>کشاورزی</MenuItem>
                    <MenuItem>ابزار</MenuItem>
                </SubMenu>
            </SubMenu>
            <MenuItem>Save</MenuItem>
        </Menu>
    );
}