<template>
	<div>
		<h4>Lista de {{ titulo }}</h4>
		<ul>
			<li v-for="item in lista">
				{{ item.nome }} de <i>{{ item.marca }}</i>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		props: {
			titulo: null,
			lista: {
				required: true,
				type: Array | Object
			}
		}
	}
</script>