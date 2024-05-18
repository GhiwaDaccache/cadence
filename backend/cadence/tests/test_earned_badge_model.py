from django.test import TransactionTestCase
from django.contrib.auth.models import User
from ..models.BadgeModel import Badge
from ..models.RecordedRunModel import RecordedRun 
from ..models.EarnedBadgeModel import EarnedBadge

class EarnedBadgeModelTestCase(TransactionTestCase):
    def setUp(self):
        self.user = User.objects.create_user(username='testuser', email='testuser@example.com', password='testpass123')
        self.badge = Badge.objects.create(name='Gold Badge')

        self.recorded_run = RecordedRun.objects.create(
            recorded_on='2024-05-18',
            start_time='06:00:00',
            end_time='06:30:00',
            real_pace=5.0,
            real_distance=5.0,
            real_duration=30.0,
            user=self.user
        )

        self.earned_badge = EarnedBadge.objects.create(
            badge=self.badge,
            recorded_run=self.recorded_run
        )

    def test_earned_badge_creation(self):
        earned_badge = EarnedBadge.objects.get(badge=self.badge, recorded_run=self.recorded_run)
        
        self.assertEqual(earned_badge.badge, self.badge)
        self.assertEqual(earned_badge.recorded_run, self.recorded_run)

    def test_earned_badge(self):
        earned_badge = EarnedBadge.objects.get(badge=self.badge, recorded_run=self.recorded_run)
        self.assertEqual(str(earned_badge), f'EarnedBadge: {self.badge.name}')
