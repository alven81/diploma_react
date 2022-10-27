import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CatElement from "pages/catalog/CatElement";

const New = () => {
    const catalog = useSelector((state) => state.loadData.loadCatalog);

    const [newCatalog, setNewCatalog] = useState([]);
    const [block, setBlock] = useState([]);
    const [blockSize, setBlockSize] = useState(0);
    let [leadBlock, setLeadBlock] = useState(1);
    const tempBlock = catalog.filter((catalog) => catalog.new);

    useEffect(() => {
        if (tempBlock.length <= 4) {
            setBlockSize(1);
            setBlock(catalog.filter((catalog) => catalog.new));
        } else {
            const tempArr = catalog.filter((catalog) => catalog.new);
            setBlockSize(+Math.floor(tempArr.length / 4));
            setNewCatalog(catalog.filter((catalog) => catalog.new));
            setBlock(tempArr.slice(0, 4));
        }
    }, []);

    const handleCarouselRight = () => {
        console.log(leadBlock, blockSize);
        if (leadBlock < blockSize) {
            setBlock(newCatalog.slice(leadBlock * 4, leadBlock * 4 + 4));
            setLeadBlock(leadBlock + 1);
        }
        if (leadBlock === blockSize) {
            setBlock(
                newCatalog.slice(newCatalog.length - 5, newCatalog.length - 1)
            );
        }
    };

    const handleCarouselLeft = () => {
        console.log(leadBlock, blockSize);
        if (leadBlock === blockSize) {
            setBlock(
                newCatalog.slice(newCatalog.length - 8, newCatalog.length - 4)
            );
            setLeadBlock(leadBlock - 1);
        }
        if (leadBlock < blockSize) {
            setBlock(newCatalog.slice(leadBlock * 4 - 4, leadBlock * 4));
            if (leadBlock > 1) {
                setLeadBlock(leadBlock - 1);
            }
        }
        if (leadBlock === 1) {
            setBlock(newCatalog.slice(0, 4));
        }
    };

    return (
        <div className="new_block">
            <div>
                <p className="new-main-header">NEW IN THIS CATEGORY</p>{" "}
                {/* НОВИНКИ В ЭТОЙ КАТЕГОРИИ */}
                <div className="new-main-block">
                    <button
                        onClick={() => handleCarouselLeft()}
                        className="prev"
                    />

                    <div className="new-main">
                        {" "}
                        {block &&
                            block.map((catalog) => (
                                <CatElement
                                    key={catalog.id}
                                    catalog={catalog}
                                />
                            ))}
                    </div>

                    <button
                        onClick={() => handleCarouselRight()}
                        className="next"
                    />
                </div>
            </div>
        </div>
    );
};
export { New };
