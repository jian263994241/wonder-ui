import React from 'react';
import Context from './Context';
import processSections from 'rsg-components/../utils/processSections';
import filterSectionsByName from 'rsg-components/../utils/filterSectionsByName';

export default function Search(props){
  const {placeholder, className} = props;
  const styleguide =  React.useContext(Context);
  const [searchTerm, setSearchTerm] = React.useState('');
  const onSearchTermChange = React.useCallback(e=>{
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
  }, []);

  const sections = React.useMemo(()=>{
    const allSections = processSections(styleguide.sections);
    const filtered = filterSectionsByName(allSections, searchTerm);
    console.log(filtered);
    
  }, [searchTerm]);

  return (
    <span className={className}>
      <input 
        type="text" 
        className="wonder-doc-search" 
        placeholder={placeholder}
        value={searchTerm}
        onChange={onSearchTermChange}
      />
    </span>
  )
}