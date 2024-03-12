import search from "../../assets/images/icons/search.svg";

const CatalogFilter = () => {
  return (
    <div className="catalog-filter d-flex-rows w-100">
    <div className="filter-items d-flex-rows">
      <select name="s" id="s" className="filter-item">
        <option value="">Категория</option>
        <option value="">Маски</option>
        <option value="">Ботинки </option>
        <option value="">Куртки </option>
        <option value="">Сноуборды</option>
      </select>

      <select name="s" id="s" className="filter-item">
        <option value="">Пол</option>
        <option value="">Мужской</option>
        <option value="">Женский</option>
        <option value="">Унисекс</option>
      </select>

      <select name="s" id="s" className="filter-item">
        <option value="">Бренд</option>
        <option value="">Oakley</option>
        <option value="">Burton</option>
        <option value="">686</option>
      </select>

      <select name="s" id="s" className="filter-item">
        <option value="">Цвет</option>
        <option value="">Желтый</option>
        <option value="">Белый</option>
        <option value="">Черный</option>
      </select>

      <select name="s" id="s" className="filter-item">
        <option value="">Размер</option>
        <option value="">OneSize</option>
        <option value="">M</option>
        <option value="">XL</option>
      </select>

      <select name="s" id="s" className="filter-item">
        <option value="">Цена</option>
        <option value="">Больше</option>
      </select>
    </div>
    <div className="search d-flex-rows">
      <input type="search" name="" id="" placeholder="Поиск"></input>
      <img src={search} alt="" />
    </div>
  </div>
  )
}

export default CatalogFilter