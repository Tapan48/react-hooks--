/// so basically useCallback is used to memoize the function so that it is not recreated on every render

// useCallback(fn, [dependencies])


///if dependencies provided changes, the function will be recreated on every render of a component


// if dependencies dont change, the function will be locked in the memory and will not be recreated on every render of a component

// if dependencies are not provided, the function will be locked in the memory and will not be recreated on every render of a component


 










///////////////////////////////////////

// usememo is used to memoize the value so that it is not recalculated on every render of a component


// usememo(fn, [dependencies])

//fn performs the computation and returns the value


/// if dependencies provided changes, the memoized value will be recalculated,the function will be called again

/// if dependencies dont change, the memoized value will be returned

















