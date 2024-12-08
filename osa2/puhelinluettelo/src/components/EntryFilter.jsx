const EntryFilter = ({newFilter,onNewFilterChange}) => {
    return(
    
      <p>
        filter shown with<input value={newFilter} onChange={onNewFilterChange}/><br/>
      </p>
    
    )
    
    }


export default EntryFilter