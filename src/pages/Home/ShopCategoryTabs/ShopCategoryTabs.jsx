import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ShopCategoryCard from "./ShopCategoryCard";

const ShopCategoryTabs = () => {
  const [categoryDatas, setCategoryData] = useState([]);


  useEffect(()=> {
    fetch(`http://localhost:5000/category/cat`)
    .then(res => res.json())
    .then(data => {
        setCategoryData(data)
    })
  }, [])


  const handleTab = (event) => {
    const category = event.target.innerText.toLowerCase();
    console.log(category);

    fetch(`http://localhost:5000/category/${category}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setCategoryData(data);
      });
  };

  console.log(categoryDatas);

  return (
    <div className="max-w-7xl mx-auto mb-20">
      <Tabs>
        <TabList>
          <Tab onClick={handleTab}>Cat</Tab>
          <Tab onClick={handleTab}>Unicorn</Tab>
          <Tab onClick={handleTab}>Teddy Bear</Tab>
          <Tab onClick={handleTab}>Dogs</Tab>
          <Tab onClick={handleTab}>Horse</Tab>
        </TabList>

        <TabPanel>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryDatas?.map((cateoryData) => (
              <ShopCategoryCard
                key={cateoryData._id}
                cateoryData={cateoryData}
              ></ShopCategoryCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
        <div className="flex gap-5">
            {categoryDatas?.map((cateoryData) => (
              <ShopCategoryCard
                key={cateoryData._id}
                cateoryData={cateoryData}
              ></ShopCategoryCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
        <div className="flex gap-5">
            {categoryDatas?.map((cateoryData) => (
              <ShopCategoryCard
                key={cateoryData._id}
                cateoryData={cateoryData}
              ></ShopCategoryCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
        <div className="flex gap-5">
            {categoryDatas?.map((cateoryData) => (
              <ShopCategoryCard
                key={cateoryData._id}
                cateoryData={cateoryData}
              ></ShopCategoryCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
        <div className="flex gap-5">
            {categoryDatas?.map((cateoryData) => (
              <ShopCategoryCard
                key={cateoryData._id}
                cateoryData={cateoryData}
              ></ShopCategoryCard>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopCategoryTabs;
