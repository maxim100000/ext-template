<script lang="ts">
    let checked: boolean = $state(false)

</script>

<h1 class="{{visible: checked, invisible: !checked}} transition-opacity duration-1000 {checked ? 'opacity-100': 'opacity-0'}">Привет</h1>


<div class="flex justify-center items-center"><input type="checkbox"
                                                     bind:checked={checked}
                                                     class="checkbox checkbox-warning">
</div>