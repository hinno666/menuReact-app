import { useState } from "react";
import data from './data'
import MenuList from "./MenuList"
import Categories from "./Categories"

const allCategories = ['all', ...new Set(data.map((item) => item.category))]

const App = () => {

  const [menu, setMenu] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if(category === 'all') {
      return setMenu(data);
    }

    const newItems = data.filter((item) => item.category === category);
    setMenu(newItems)
  }

  return <main>
    <section className="menu">
      <div className="title">
        <h2>Our menu</h2>
        <div className='title-underline'></div>
      </div>
      <Categories categories={categories} filterItems={filterItems} />
      <MenuList menu={menu} />
    </section>
  </main>;
};
export default App;
