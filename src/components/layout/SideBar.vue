<template>
    <b-navbar id="sidebar" toggleable="md" type="light" variant="light" size="sm" class="sidebar">
        <b-nav-toggle target="sidenav_collapse"></b-nav-toggle>
        <b-collapse id="sidenav_collapse" is-nav>
            <b-navbar-nav class="flex-column mr-auto">
                <b-nav-item>
                    Dashboard
                </b-nav-item>
                <b-nav-item>
                    Calendar
                </b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
export default {

};
</script>

<style scoped lang="scss">
    #sidebar {
        min-width: 250px;
        max-width: 250px;
        min-height: 100vh;
        align-items: flex-start;

        li {
            display: flex;
        }
    }

</style>
