export function formatDate(dateString: string | number | Date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' } as const
    return new Date(dateString).toLocaleDateString('fr-FR', options)
}
