from ..models.BadgeModel import Badge;
from django.test import TransactionTestCase;


class BadgeModelTestCase(TransactionTestCase):
    def setUp(self):
        Badge.objects.create(name='Gold Badge')

    def test_name(self):
        badge = Badge.objects.get(name='Gold Badge')
        self.assertEqual(badge.name, 'Gold Badge')