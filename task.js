let tabs = document.querySelectorAll( '.tabs' );

function delClass( array, nameClass) {
  array.forEach( (item) => {
    item.classList.remove( nameClass );
  });
}

function indexActive( array, nameClass ) {
  let index = null;
  array.forEach( (item, i) => {
    if ( item.classList.contains( nameClass ) ) index = i;
  });
   if ( index !== null ) return index;
}

function selectTab( event ) {
  let tabs = event.currentTarget.querySelectorAll( '.tab' );
  let contents = event.currentTarget.querySelectorAll( '.tab__content' );

  delClass( tabs, 'tab_active' );
  delClass( contents, 'tab__content_active' );

  event.target.classList.add( 'tab_active' );

  contents[indexActive( tabs, 'tab_active' )].classList.add( 'tab__content_active' );
}

tabs.forEach( (item) => {
  item.addEventListener( 'click', selectTab );
});
