import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuex from 'vuex'
import {
    Swipe,
    SwipeItem,
    Tabbar,
    TabbarItem,
    Cell,
    CellGroup,
    NoticeBar,
    Icon,
    Divider,
    Grid,
    GridItem,
    Row,
    Col,
    Sticky,
    Tab,
    Tabs,
    Dialog,
    Toast,
    NavBar,
    Notify,
    Checkbox,
    CheckboxGroup,
    Field,
    Tag,
    CountDown,
    List,
    Collapse,
    CollapseItem,
    PullRefresh,
    Panel,
    Button,
    Popup,
    Calendar,
    SwipeCell,
    DropdownMenu,
    DropdownItem,
    Overlay,
    PasswordInput,
    NumberKeyboard,
    Step,
    Steps,
    Progress,
    Skeleton,
    TreeSelect,
    ActionSheet,
    RadioGroup,
    Radio,
    Sidebar,
    SidebarItem,
    Loading,
    Form,
    Picker,
    Image,
    Lazyload
} from 'vant';
import 'vant/lib/index.css'

createApp(App).use(store).use(router).use(Vuex).use(Swipe).use(SwipeItem).use(Tabbar).use(TabbarItem).use(Cell).use(CellGroup).use(NoticeBar)
.use(Icon).use(Divider).use(Grid).use(GridItem).use(Row).use(Col).use(Sticky).use(Tab).use(Tabs).use(Dialog).use(Toast)
.use(NavBar).use(Notify).use(Checkbox).use(CheckboxGroup).use(Field).use(Tag).use(CountDown).use(List).use(Collapse).use(CollapseItem).use(PullRefresh)
.use(Panel).use(Button).use(Popup).use(Calendar).use(SwipeCell).use(DropdownMenu).use(DropdownItem).use(Overlay).use(PasswordInput).use(NumberKeyboard).use(Step).use(Steps)
.use(Progress).use(Skeleton).use(TreeSelect).use(ActionSheet).use(RadioGroup).use(Radio).use(Sidebar).use(SidebarItem).use(Loading)
.use(Form).use(Picker).use(Image).use(Lazyload).mount('#app')

export default new Vuex.Store({
    state: {
        testBoolean: true,
    },
    mutations: {
        
    },
})
