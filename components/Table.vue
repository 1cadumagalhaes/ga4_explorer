<script>
export default {
    props: {
        filter: {
            type: String,
            default: 'dimension',
        },
    },
    data() {
        return {
            data: [],
            error: null,
            pending: true,
            columns: [],
            dim: '',
            cat: '',
            filteredData: [],
            placeHolderText: '',
        };
    },
    async created() {
        this.setColumns();
        await this.fetchData();
        this.filterTable();
        this.placeHolderText = `Filter ${this.filter}s`;
    },
    methods: {
        filterTable() {
            const dimension_filter = this.dim.toLowerCase();
            const category_filter = this.cat.toLowerCase();
            const condition_filter = (field, filter) =>
                !filter || (filter && field.toLowerCase().includes(filter));
            this.filteredData = this.data.filter(({ title, category }) => {
                return (
                    condition_filter(category, category_filter) &&
                    condition_filter(title, dimension_filter)
                );
            });
            // .filter(({ title }) => {
            //     return condition_filter(title, dimension_filter);
            // });
        },
        setColumns() {
            const columns = [
                // {
                //     key: 'type',
                //     label: 'Type',
                //     sortable: true,
                // },
                {
                    key: 'category',
                    label: 'Category',
                    sortable: true,
                },
                {
                    key: 'title',
                    label: 'Title',
                    sortable: true,
                },
                {
                    key: 'description',
                    label: 'Description',
                    sortable: true,
                },
                {
                    key: 'population',
                    label: 'Population',
                    sortable: true,
                },
                // {
                //     key: 'extraction_date',
                //     label: 'Extraction Date',
                //     sortable: true,
                // },
            ];

            this.columns = columns;
        },
        async fetchData() {
            const URL =
                'https://storage.googleapis.com/dp6-public/ga4_dimensions_and_metrics.json?v=2';
            // const URL = './ga4_dimensions_and_metrics.json';
            const { data: rows, pending, error } = await useFetch(URL);
            this.pending = pending;
            this.error = error;
            this.data = rows._rawValue
                .filter(({ type }) => type === this.filter)
                .map(
                    ({
                        title,
                        description,
                        population,
                        extraction_date,
                        type,
                        category,
                    }) => {
                        let links = [
                            ...title.links,
                            ...description.links,
                            ...population.links,
                        ];
                        return {
                            title: title.text,
                            description: description.text,
                            population: population.text,
                            extraction_date,
                            type,
                            category,
                            links,
                        };
                    }
                );
        },
    },
    watch: {
        dim: function () {
            this.filterTable();
        },
        cat: function () {
            this.filterTable();
        },
    },
};
</script>
<template>
    <div>
        <div class="flex">
            <UInput v-model="cat" placeholder="Filter categories" />
            <UInput v-model="dim" :placeholder="placeHolderText" />
        </div>
        <UContainer>
            <UTable class="table-auto" :columns="columns" :rows="filteredData">
                <template #description-data="{ row }">
                    <p class="whitespace-pre-line" v-html="row.description"></p>
                </template>
                <template #population-data="{ row }">
                    <p class="whitespace-pre-line" v-html="row.population"></p>
                </template>
            </UTable>
        </UContainer>
    </div>
</template>
