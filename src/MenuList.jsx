import MenuItem from "./MenuItem";

const MenuList = ({menu}) => {
    return <div className="section-center">
        {menu.map((menuItem) => {
            return (
                <MenuItem key={menuItem.id} {...menuItem} />
            )
        })}
    </div>
}
 
export default MenuList;