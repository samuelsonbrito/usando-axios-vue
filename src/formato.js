export default{

	bind: function (elemento, informacao, vnode){
		switch(Object.keys(informacao.modifiers)[0]){
			case 'maiusculo':
				elemento.innerHTML = elemento.innerHTML.toUpperCase()
			break
			case 'minusculo':
				elemento.innerHTML = elemento.innerHTML.toLowerCase()
			break
			case 'capitalizado':
				let txt = elemento.innerHTML.split(' ')
				elemento.innerHTML = ''

				for(let i = 0; i < txt.length; i++){
					elemento.innerHTML += txt[i].substring(0, 1).toUpperCase() + txt[i].substring(1)+ ' '
				}
			break
		}
	}

}