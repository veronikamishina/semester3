new Vue({
    el: '#app',
    data: {
        kmh: null,
        ms: null,
        // Предотвращение бесконечного цикла обновлений
        updating: false
    },
    watch: {
        kmh: function(newVal) {
            if (this.updating) return;
            
            this.updating = true;
            if (newVal === null || newVal === '') {
                this.ms = null;
            } else {
                // Конвертирую км/ч в м/с: м/с = км/ч * (1000/3600)
                this.ms = Math.round((newVal * 1000 / 3600) * 100) / 100;
            }
            this.updating = false;
        },
        ms: function(newVal) {
            if (this.updating) return;
            
            this.updating = true;
            if (newVal === null || newVal === '') {
                this.kmh = null;
            } else {
                // Конвертирую м/с в км/ч: км/ч = м/с * (3600/1000)
                this.kmh = Math.round((newVal * 3600 / 1000) * 100) / 100;
            }
            this.updating = false;
        }
    }
});