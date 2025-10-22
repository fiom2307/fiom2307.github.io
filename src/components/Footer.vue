<script setup>
</script>

<template>
    <footer class="mt-20 py-6 border-t border-dark-blue/30">
        <div class="px-6 flex flex-col items-center gap-2">

            <!-- Social icons -->
            <div class="flex gap-4">
                <a href="https://www.linkedin.com/in/fiorella-milla/"
                    target="_blank"
                    aria-label="LinkedIn"
                    class="hover:text-dark-pink transition hover:scale-110">
                    <font-awesome-icon :icon="['fab', 'linkedin']" class="w-6 h-6" />
                </a>

                <a href="https://github.com/fiom2307"
                    target="_blank"
                    aria-label="GitHub"
                    class="hover:text-dark-pink transition hover:scale-110">
                    <font-awesome-icon :icon="['fab', 'github']" class="w-6 h-6" />
                </a>

                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=fmilla1000@gmail.com"
                    target="_blank"
                    aria-label="Email"
                    class="hover:text-dark-pink transition hover:scale-110">
                    <font-awesome-icon :icon="['fas', 'envelope']" class="w-6 h-6" />
                </a>
            </div>

            <!-- Copyright -->
            <p class="text-sm text-dark-blue/70">
            © 2025 Fiorella Milla
            </p>
        </div>
    </footer>

</template>